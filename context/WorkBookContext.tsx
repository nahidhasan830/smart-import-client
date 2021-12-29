import { createContext, useState } from 'react';
import { IWorkbookCtx } from '../interfaces/IWorkbookContext';
import { IWorkbook, SpreadSheetFinalData } from '../interfaces/ISpreadSheet';
import spreadSheetDataTransform from '../utils/spreadSheetDataTransform';

interface IProps {}

const initialValue: IWorkbookCtx = {
  workbookSheets: [],
  workbookData: [],
  setWorkbookDataFn: (data: IWorkbook) => {},
  selectedCellData: '',
  setSelectedCellDataFn: (data: string) => {}
};

export const WorkbookContext = createContext(initialValue);

export interface IExcelData {}

const WorkbookContextProvider: React.FC<IProps> = ({ children }) => {
  const [workbookData, setWorkbookData] = useState<SpreadSheetFinalData>({});
  const [workbookSheets, setWorkbookSheets] = useState<string[] | []>([]);
  const [selectedCellData, setSelectedCellData] = useState('');

  const setWorkbookDataFn = (wb: IWorkbook) => {
    const { Sheets, SheetNames } = wb;
    const spreadSheetData: SpreadSheetFinalData =
      spreadSheetDataTransform(Sheets);

    setWorkbookSheets(SheetNames);
    setWorkbookData(spreadSheetData);
  };

  const setSelectedCellDataFn = (data: string) => {
    setSelectedCellData(data);
  };

  const value: IWorkbookCtx = {
    workbookData,
    setWorkbookDataFn,
    workbookSheets,
    selectedCellData,
    setSelectedCellDataFn
  };

  return (
    <WorkbookContext.Provider value={value}>
      {children}
    </WorkbookContext.Provider>
  );
};

export default WorkbookContextProvider;
