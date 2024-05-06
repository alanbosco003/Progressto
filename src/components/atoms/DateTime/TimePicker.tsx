// DatePickerModal.js
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface Props {
    isVisible: boolean;
    handleConfirm: (date: Date) => void;
    hideDatePicker: () => void;
    onConfirm: (date: Date) => void; // Add onConfirm prop
    onCancel: () => void; // Add onCancel prop
  }
  
const ProDatePickerModal = ({ isVisible, handleConfirm, hideDatePicker }: Props) => {
  return (
    <DateTimePickerModal isVisible={isVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
  );
};

export default ProDatePickerModal;