import singleIcon from '../../assets/inputIcon.svg';
import numericIcon from '../../assets/numericalIcon.svg';
import radioIcon from '../../assets/radioIcon.svg';
import smileyIcon from '../../assets/smileyIcon.svg';
import starIcon from '../../assets/starIcon.svg';
import textareaIcon from '../../assets/textareaIcon.svg';
import categoriesIcon from '../../assets/cateIcon.svg';
export const availableFields = [
  {
    type: 'textarea',
    label: 'Textarea',
    icon: textareaIcon,
  },
  {
    type: 'numeric',
    label: 'Numeric Rating',
    icon: numericIcon,
  },
  {
    type: 'star',
    label: 'Star Rating',
    icon: starIcon,
  },
  {
    type: 'smiley',
    label: 'Smiley Rating',
    icon: smileyIcon,
  },
  {
    type: 'single',
    label: 'Single Line Input',
    icon: singleIcon,
  },
  {
    type: 'radio',
    label: 'Radio Button',
    icon: radioIcon,
  },
  {
    type: 'categories',
    label: 'Categories',
    icon: categoriesIcon,
  },
];
