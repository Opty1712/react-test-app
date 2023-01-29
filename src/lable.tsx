import { styled } from 'linaria/react';

export const LabelForInput = () => {
    return <Label>Enter the Kelvins</Label>
};

const Label = styled.div`
    width: fit-content;
    color: #f2f5fc;
    background: #6161ff;
    padding: 2px 5px;
    borderRadius: 3px;
`