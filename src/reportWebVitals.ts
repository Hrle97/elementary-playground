import { ReportHandler } from 'web-vitals';

export default function reportWebVitals(
  onPerfEntry?: ReportHandler)
{
  onPerfEntry &&
  import('web-vitals')
    .then(wv =>
    {
      wv.getCLS(onPerfEntry);
      wv.getFID(onPerfEntry);
      wv.getFCP(onPerfEntry);
      wv.getLCP(onPerfEntry);
      wv.getTTFB(onPerfEntry);
    });
};
