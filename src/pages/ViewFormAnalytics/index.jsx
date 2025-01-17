import { Accordion, Card, Flex, Image, LoadingOverlay, Text } from '@mantine/core';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import whiteBack from '../../assets/whiteBack.svg';
import { AdminNav } from '../../components/AdminNav';
import { useFirestore } from '../../hooks/useFirestore';
import { formatDate } from '../../utils/date';
import { PageRoutes } from '../../utils/PageRoutes';
import styles from './index.module.css';
import AngryFilled from '../../assets/angryFilled.svg';
import AngryOutlined from '../../assets/angryOutline.svg';
import duhFilled from '../../assets/duhFilled.svg';
import duhOutlined from '../../assets/duhOutline.svg';
import happyFilled from '../../assets/happyFilled.svg';
import happyOutlined from '../../assets/happyOutline.svg';
import sadFilled from '../../assets/sadFilled.svg';
import sadOutlined from '../../assets/sadOutline.svg';
import smileFilled from '../../assets/smileFilled.svg';
import smileOutlined from '../../assets/smileOutline.svg';
import React from 'react';
const FormDetail = () => {
  const navigate = useNavigate();
  const filledSmiley = [AngryFilled, sadFilled, duhFilled, smileFilled, happyFilled];
  const { getAllDocuments } = useFirestore('forms-responses');
  const { getDocument, loading } = useFirestore('forms');
  const formId = useParams().id;
  const [formResponses, setFormResponses] = useState([]);
  const [formDetails, setFormDetails] = useState({});

  const getFormResponses = async () => {
    const responses = await getAllDocuments();
    const filteredResponses = responses.filter((response) => response?.[formId]?.length);
    const form = await getDocument(formId);
    setFormDetails(form);
    setFormResponses(filteredResponses);
  };

  useEffect(() => {
    getFormResponses();
  }, []);

  if (loading) {
    return <LoadingOverlay visible />;
  }

  return (
    <section>
      <AdminNav />
      <main className={styles.formDetailsContainer}>
        <Card shadow="md" className={styles.formCard}>
          <Flex className={styles.cardHeader}>
            <Flex
              className={styles.title}
              onClick={() => {
                navigate(PageRoutes.dashboard);
              }}
            >
              <Image src={whiteBack} />
              <Text size="lg" style={{ fontWeight: '500' }}>
                {formDetails?.name}
              </Text>
            </Flex>
            <Text>Created date: {formatDate(formDetails?.createdAt?.toDate())}</Text>
          </Flex>
          <Flex direction="column" style={{ padding: '20px' }}>
            <Flex gap="5rem" style={{ padding: '0 5rem 1rem' }}>
              <Flex direction="column" align="`center">
                <Text size="3rem" style={{ fontWeight: '500' }}>
                  {formResponses?.length}
                </Text>
                <Text size="xl">Views</Text>
              </Flex>
              <Flex direction="column" align="`center">
                <Text size="3rem" style={{ fontWeight: '500' }}>
                  {formResponses?.length}
                </Text>
                <Text size="xl">Submissions</Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="10px">
              <Flex gap="md">
                <Text style={{ fontWeight: '500' }}>Page URL contains:-</Text>
                <Text style={{ color: 'gray' }}>{formDetails?.url || 'NA'}</Text>
              </Flex>
              <Flex gap="md">
                <Text style={{ fontWeight: '500' }}>Date:-</Text>
                <Text style={{ color: 'gray' }}>{formDetails?.date || 'NA'}</Text>
              </Flex>
              <Flex gap="md">
                <Text style={{ fontWeight: '500' }}>Time:-</Text>
                <Text style={{ color: 'gray' }}>{formDetails?.time || 'NA'}</Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="15px">
              <Text size="xl" style={{ fontWeight: '500', paddingTop: '15px' }}>
                Feedback List
              </Text>
              <Accordion style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {formResponses.map((response, index) => (
                  <RenderAccordianItem key={response.id} response={response} index={index} />
                ))}
              </Accordion>
            </Flex>
          </Flex>
        </Card>
      </main>
    </section>
  );

  function RenderAccordianItem({ response, index }) {
    return (
      <Accordion.Item key={response?.id} value={response?.id} style={{ boxShadow: '0px 0px 5px #aaa' }}>
        <Accordion.Control>
          <Flex justify="space-between">
            <Text style={{ color: '#254AA8' }}>Feedback {index + 1}</Text>
            <Flex>{formatDate(response?.createdAt?.toDate())}</Flex>
          </Flex>
        </Accordion.Control>
        <Accordion.Panel>
          <Flex direction="column">
            {response?.[formId].map((field) => (
              <Fragment key={field?.id}>
                <Text size="md" style={{ fontWeight: '500' }}>
                  {field?.label}
                </Text>
                {
                  field.type==='smiley'&&  <img src={filledSmiley[field?.value - 1]} alt="reaction"  width={'40px'}/>
                  
                }

                <Text style={{ color: 'gray' }}>{field?.value}</Text>
              </Fragment>
            ))}
          </Flex>
        </Accordion.Panel>
      </Accordion.Item>
    );
  }
};

export { FormDetail };
