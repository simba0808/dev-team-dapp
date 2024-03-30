import FingerPrintJS from '@fingerprintjs/fingerprintjs';

export const getFingerprint = async () => {
  const fp = await FingerPrintJS.load();
  const {visitorId} = await fp.get();
  return visitorId;
};