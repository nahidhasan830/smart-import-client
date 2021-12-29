import { ChangeEvent, useContext, useEffect, useRef } from 'react';
import { HotTable, HotTableProps } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import Handsontable from 'handsontable';
import { WorkbookContext } from '../../../../context/WorkBookContext';
import {
  ISpreadSheetData,
  SpreadSheetFinalData
} from '../../../../interfaces/ISpreadSheet';

registerAllModules();

const hotSettings: Handsontable.GridSettings = {
  colHeaders: true,
  rowHeaders: true,
  minCols: 10,
  minRows: 15,
  width: 600,
  height: 400,
  readOnly: true,
  licenseKey: 'non-commercial-and-evaluation',
  selectionMode: 'single'
};

const SpreadSheetRender: React.FC<HotTableProps> = () => {
  const { workbookData, workbookSheets, setSelectedCellDataFn } =
    useContext(WorkbookContext);
  const hotTableComponent = useRef(null);
  const firstSheetData: ISpreadSheetData[] = (
    workbookData as SpreadSheetFinalData
  )[workbookSheets[0]];

  useEffect(() => {
    const hotInstance = (hotTableComponent!.current as any)!.hotInstance;
    hotInstance.style = { color: 'red' };
    hotInstance.addHook(
      'afterSelectionEnd',
      function (row: number, column: number) {
        const selectedCellData = hotInstance.getDataAtCell(row, column);
        setSelectedCellDataFn(selectedCellData);
      }
    );

    hotInstance.addHook('afterDeselect', function (e: ChangeEvent) {
      setSelectedCellDataFn('');
    });
  }, [setSelectedCellDataFn]);

  useEffect(() => {
    firstSheetData.forEach(data => {
      const { rowNumber, columnNumber, value } = data;
      (hotTableComponent!.current as any)!.hotInstance.setDataAtCell(
        rowNumber - 1,
        columnNumber - 1,
        value
      );
    });
  }, [firstSheetData]);

  return <HotTable settings={hotSettings} ref={hotTableComponent} />;
};

export default SpreadSheetRender;
