import styled from 'styled-components';
import Checkbox from '@/components/common/checkbox';

const Label = styled.span`
  color: var(--textColorDim);
`;

export default function Option(props: MainPanelItemCheckbox) {
  return (
    <>
      <Checkbox isChecked={props.isChecked} />
      <Label>{props.label}</Label>
    </>
  );
}