import fs from 'fs';

const dataFilePath = 'data.json';

export const readDataFromFile = () => {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading data from file:', error);
    return null;
  }
};

export const writeDataToFile = (data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataFilePath, jsonData, 'utf8');
    console.log('Data written to file successfully.');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
};
