import { IWorkbook, SpreadSheetFinalData } from './ISpreadSheet';

export interface IWorkbookCtx {
  workbookSheets: string[] | [];
  workbookData: SpreadSheetFinalData | {};
  setWorkbookDataFn: (data: IWorkbook) => void;
  selectedCellData: string;
  setSelectedCellDataFn: (data: string) => void;
}
