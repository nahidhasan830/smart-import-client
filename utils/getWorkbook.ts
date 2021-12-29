import XLSX from 'xlsx';

export const validateWorkbook = (file: File) => {
  const fileName = file.name;
  const fileExt = fileName && fileName.split('.').pop();
  if (fileExt !== 'xls' && fileExt !== 'xlsx') {
    return false;
  }
  return true;
};

export const getWorkbook = async (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      if (!e?.target?.result) return;
      const fileBuffer: any = e.target.result;
      const wb = XLSX.readFile(fileBuffer, { type: 'buffer' });
      resolve(wb);
    };
    fileReader.readAsArrayBuffer(file);
  });
};
