import React from 'react'; // Import React explicitly

import {
  
  useSortable,

} from '@dnd-kit/sortable';
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

import { Flex, Text, Image, Textarea, InputLabel, Rating, TextInput, Radio, SegmentedControl } from '@mantine/core';
const RenderField = ({ field }) => {
    console.log("this is the fields", field)
    
    switch (field?.type) {
      case 'textarea':
        return <Textarea withAsterisk={field?.isRequired} label={field?.label || `Enter ${field.type}`} />;
      case 'numeric':
        { const EmptySymbol = (number) => <Flex style={{ border: '1px solid gray', padding: '5px 15px' }}>{number}</Flex>;
        const FullSymbol = (number) => (
          <Flex style={{ border: '1px solid gray', padding: '5px 15px', background: '#5578f4', color: 'white' }}>
            {number}
          </Flex>
        );
        return (
          <Flex direction="column">
            <InputLabel required={field?.isRequired}>{field?.label || `Enter ${field.type}`}</InputLabel>
            <Rating count={10} emptySymbol={EmptySymbol} fullSymbol={FullSymbol} highlightSelectedOnly />
          </Flex>
        ); }
      case 'star':
        return (
          <Flex direction="column">
            <InputLabel required={field?.isRequired}>{field?.label || `Enter ${field.type}`}</InputLabel>
            <Rating size="xl" />
          </Flex>
        );
      case 'smiley':
        { const outLineSmiley = [AngryOutlined, sadOutlined, duhOutlined, smileOutlined, happyOutlined];
        const filledSmiley = [AngryFilled, sadFilled, duhFilled, smileFilled, happyFilled];
        const EmptySmiley = (number) => <Image src={outLineSmiley[number - 1]} />;
        const FilledSmiley = (number) => <Image src={filledSmiley[number - 1]} />;
        return (
          <Flex direction="column">
            <InputLabel required={field?.isRequired}>{field?.label || `Enter ${field.type}`}</InputLabel>
            <Rating emptySymbol={EmptySmiley} fullSymbol={FilledSmiley} highlightSelectedOnly />
          </Flex>
        ); }
      case 'single':
        return <TextInput withAsterisk={field?.isRequired} label={field?.label || `Enter ${field.type}`} />;
      case 'radio':
        return (
          <Flex direction="column">
            <InputLabel required={field?.isRequired}>{field?.label || `Enter ${field.type}`}</InputLabel>
            <Radio
              name={field?.id}
              value={field?.options?.[0] || 'Option 1'}
              label={field?.options?.[0] || 'Option 1'}
            />
            <Radio
              name={field?.id}
              value={field?.options?.[1] || 'Option 2'}
              label={field?.options?.[1] || 'Option 2'}
            />
            <Radio
              name={field?.id}
              value={field?.options?.[2] || 'Option 3'}
              label={field?.options?.[2] || 'Option 3'}
            />
          </Flex>
        );
      case 'categories':
        return (
          <Flex direction="column">
            <InputLabel required={field?.isRequired}>{field?.label || `Enter ${field.type}`}</InputLabel>
            <SegmentedControl
              label={field?.label}
              isRequired={field?.isRequired}
              data={field?.options || ['1', '2', '3']}
            />
          </Flex>
        );
      default:
        return <></>;
    }
  };

  

 export const SortableItem = ({ id, field }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
    //   transform: CSS.Transform.toString(transform),
      transition,
      background: 'white',
      cursor: 'move',
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <RenderField field={field} />
      </div>
    );
  };
