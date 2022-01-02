import {
  ISheetnameValuePair,
  SpreadSheetFinalData
} from '../interfaces/ISpreadSheet';

const alphabeticPosition = [
  '',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

export const cellToRowColumn = (cellName: string) => {
  const rowNumber = +cellName.match(/\d+/g)![0];

  const [firstLetter, secondLetter, thirdLetter] = cellName.match(/([A-Z])/g)!;

  const firstExist = +alphabeticPosition.indexOf(firstLetter);

  const secondExist =
    secondLetter &&
    +26 * alphabeticPosition.indexOf(firstLetter) +
      alphabeticPosition.indexOf(secondLetter);

  const thirdExist =
    thirdLetter &&
    +(
      26 * 26 * alphabeticPosition.indexOf(firstLetter) +
      26 * alphabeticPosition.indexOf(secondLetter) +
      alphabeticPosition.indexOf(thirdLetter)
    );

  const columnNumber = thirdExist || secondExist || firstExist;

  return { rowNumber, columnNumber };
};

const spreadSheetDataTransform = (Sheets: any) => {
  let finalData: any = {};

  for (const [sheetName, sheetValue] of Object.entries(
    Sheets as ISheetnameValuePair
  )) {
    finalData[sheetName] = [];
    for (const [cellName, value] of Object.entries(
      sheetValue as ISheetnameValuePair
    )) {
      if (cellName.startsWith('!')) continue;
      const { rowNumber, columnNumber } = cellToRowColumn(cellName);
      finalData[sheetName].push({
        cell: cellName,
        rowNumber,
        columnNumber,
        value: value.v
      });
    }
  }

  return finalData as SpreadSheetFinalData;
};

export default spreadSheetDataTransform;
