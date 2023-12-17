import fs from 'fs/promises';
import path from 'path';

const filesPath = path.resolve('files');

const createFile = async (req, res) => {
	const { fileName, content } = req.body;

	const filePath = path.resolve('files', fileName);

	try {
		await fs.writeFile(filePath, content, 'utf8');

		res.status(201).json({
			message: 'Created suscessfully',
		});
	} catch (error) {
		console.log(error);
	}
};

const getFiles = async (req, res) => {

  try {
    const result = await fs.readdir(filesPath);

		if (result.length === 0) {
			res.status(404).json({
				message: 'Folder is empty',
			});
			return;
		}

		res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getFileInfo = async (req, res) => {
  const { fileName } = req.params;
  
  try {
    const files = await fs.readdir(filesPath);

		if (!files.includes(fileName)) {
			res.status(404).json({
				message: 'File not found',
			});
			return;
		}

		const filePath = path.resolve('files', fileName);

		const fileContent = await fs.readFile(filePath, 'utf8');

		const fileExst = path.extname(filePath);

		const fileBasename = path.basename(filePath, fileExst);

		const { size } = await fs.stat(filePath);

		const result = {
			name: fileBasename,
			extention: fileExst,
			content: fileContent,
			size,
		};

		res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export default {
	createFile,
	getFiles,
	getFileInfo,
};
