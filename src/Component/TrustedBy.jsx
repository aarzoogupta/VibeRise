import React from "react";

const TrustedBy = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Trusted By</h2>
        <div className="flex justify-center space-x-8">
          <img src="/partner1.png" alt="Partner 1" className="h-12" />
          <img src="/partner2.png" alt="Partner 2" className="h-12" />
          <img src="/partner3.png" alt="Partner 3" className="h-12" />
          
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;