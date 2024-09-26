import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import { ACCEPTED_FILE_MIME_TYPES, ACCEPTED_IMAGE_MIME_TYPES, MAX_LOGO_SIZE } from "../../utils/constants";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

let mimetype = [...ACCEPTED_IMAGE_MIME_TYPES, ...ACCEPTED_FILE_MIME_TYPES];

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (mimetype.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"));
  }
};

const multerUpload = (filePrefix: string, folderName: string, fileLimit: number) => {
  const destination = `public/${folderName}`;
  const storage = multer.diskStorage({
    destination: (_req: Request, _file: Express.Multer.File, cb: DestinationCallback) => {
      cb(null, destination);
    },
    filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback) => {
      const originalname = file.originalname.split(".");
      const fileExt = originalname[originalname.length - 1];
      const filename = `${filePrefix}-${Date.now()}.${fileExt}`;
      cb(null, filename);
    },
  });
  return multer({ storage, fileFilter, limits: { fileSize: fileLimit } });
};

export const uploadCompanyLogo = multerUpload("logo", "logo", MAX_LOGO_SIZE).single("logo");
// export const uploadProductImage = multerUpload("product", "product").single("image");
// export const uploadpaymentProof = multerUpload("payment", "payment").single("file");
