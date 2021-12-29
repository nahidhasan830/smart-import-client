import { useState } from 'react';
import SmartImportLayout from './SmartImportLayout';
import Box from '@mui/material/Box';
import FileUpload from './FileUpload';
import Main from './DataVisualization/Main';
import WorkbookContextProvider from '../../context/WorkBookContext';

const SmartImport = () => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const toggleFileUploadStatus = () => setIsFileUploaded(p => !p);

  let renderedContent = (
    <FileUpload toggleFileUploadStatus={toggleFileUploadStatus} />
  );

  if (isFileUploaded) renderedContent = <Main />;

  return (
    <>
      <SmartImportLayout>
        <WorkbookContextProvider>
          <Box>{renderedContent}</Box>
        </WorkbookContextProvider>
      </SmartImportLayout>
    </>
  );
};

export default SmartImport;
