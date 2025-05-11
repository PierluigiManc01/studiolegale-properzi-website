
import React, { useEffect, useState } from 'react';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);
  
  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowConsent(false);
  };
  
  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setShowConsent(false);
  };

  return (
    <AlertDialog open={showConsent}>
      <AlertDialogContent className="max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-properzi-navy">Cookie Consent</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-4">
              We use cookies to enhance your experience on our website. By clicking "Accept All", 
              you consent to the use of ALL cookies. Alternatively, you can choose to only accept 
              necessary cookies by clicking "Accept Necessary Cookies".
            </p>
            <p className="text-sm mb-2">
              Necessary cookies help make a website usable by enabling basic functions like page 
              navigation and access to secure areas of the website. The website cannot function 
              properly without these cookies.
            </p>
            <p className="text-sm">
              We also use analytics cookies that help us understand how visitors interact with our 
              website, and marketing cookies that are used to track visitors across websites.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto"
          >
            Accept Necessary Cookies
          </Button>
          <Button 
            className="bg-properzi-beige hover:bg-properzy-navy text-properzi-navy hover:text-white w-full sm:w-auto"
            onClick={handleAcceptAll}
          >
            Accept All Cookies
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CookieConsent;
