"use client";
import React from "react";
import DocumentSection, {
  sampleData,
  DocumentItem,
} from "../components/DocumentsAndDowlonds";
import SDSEducation from '../components/SdsEdutaciton'


function CatalogList() {
  const handleCatalogClick = (item: DocumentItem) => {
    // Handle catalog item click
  };


  const renderSectionsWithCustomComponent = () => {
    const targetId = 'additional-downloads';
    const targetIndex = sampleData.findIndex(section => section.id === targetId);

    return sampleData.map((section, index) => (
      <React.Fragment key={section.id}>

        {index === targetIndex && <SDSEducation />}
        
        <DocumentSection
          data={section}
          onItemClick={handleCatalogClick}
        />
      </React.Fragment>
    ));
  };

  return (
    <>
    <div className="mx-auto flex justify-left flex-col items-center text-left">
        <p className="text-mint font-[300] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            For dentists
        </p>
        <h1 className="text-[26px] sm:text-[40px] font-[600] sm:font-[400] text-primary-600 leading-[1.2] mb-6 text-center">
            Documents and downloads
        </h1>
    </div>
      {renderSectionsWithCustomComponent()}
    </>
  )
}

export default CatalogList;