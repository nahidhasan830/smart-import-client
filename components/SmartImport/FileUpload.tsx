import { ChangeEvent, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import UploadIcon from '@mui/icons-material/Upload';
import Alert from '@mui/material/Alert';
import { getWorkbook, validateWorkbook } from '../../utils/getWorkbook';
import { WorkbookContext } from '../../context/WorkBookContext';
import { IWorkbook } from '../../interfaces/ISpreadSheet';

interface IProps {
  toggleFileUploadStatus: () => void;
}

const FileUpload: React.FC<IProps> = ({ toggleFileUploadStatus }) => {
  const workbookCtx = useContext(WorkbookContext);
  const [isSpreadSheet, setIsSpreadSheet] = useState<boolean>(true);

  const onSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const validSpreadSheet = validateWorkbook(file);
    if (!validSpreadSheet) {
      setIsSpreadSheet(false);
      return;
    }
    const wb = await getWorkbook(file);
    workbookCtx.setWorkbookDataFn(wb as IWorkbook);
    toggleFileUploadStatus();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '24rem',
        width: '48rem'
      }}
    >
      <Typography sx={{ mb: 4 }}>
        Upload your spreadsheet to start...
      </Typography>

      <label htmlFor="spreadsheet-upload-button">
        <Input
          style={{ display: 'none' }}
          id="spreadsheet-upload-button"
          inputProps={{
            accept:
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          }}
          type="file"
          onChange={onSelectFile}
        />
        <Button variant="outlined" startIcon={<UploadIcon />} component="span">
          Upload A File
        </Button>
      </label>

      {!isSpreadSheet && (
        <Alert icon={false} sx={{ mt: 4 }} severity="error">
          Not an excel file. Allowed file extension .xls, .xlsx
        </Alert>
      )}
    </Box>
  );
};

export default FileUpload;
