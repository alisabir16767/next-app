import Script from 'next/script';

const GoogleAnalytics = ({ trackingId }: { trackingId: string }) => {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;