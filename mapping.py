import pandas as pd

class Mapping:
  metadata = {
      "name": "",
      "url_name": "",
      "information_definition": "",
      "airm_version": "",
      "notes": ""
  }
  dictionary = None
  dataframe = None
     
  def __init__(self, mapping_file_pathname):  
    """Initialise a Mapping object. Load the xlsx document (mapping_file_pathname) to dataframe and dictionary. Load metadata.

    Keyword arguments:
      mapping_file_pathname -- string containing the path and filename for a mapping xlsx document.
    """
    self.dataframe = pd.read_excel(r''+mapping_file_pathname, sheet_name='semantic correspondences', engine='openpyxl')
    self.dataframe.fillna("missing data", inplace = True)
    self.dataframe = self.dataframe.applymap(str)
    self.dictionary = self.dataframe.to_dict('records')
    self.load_metadata(mapping_file_pathname)

  def load_metadata(self, mapping_file_pathname):
    """Load metadata from the 'report' sheet of the xlsx document (mapping_file_pathname) to the metadata attribute.

    Keyword arguments:
      mapping_file_pathname -- string containing the path and filename for a mapping xlsx document.
    """
    from openpyxl import load_workbook
    wb = load_workbook(filename = mapping_file_pathname)
    sheet = wb['report']
    self.metadata["information_definition"] = sheet['B2'].value
    self.metadata["airm_version"] = sheet['B4'].value
    self.metadata["notes"] = sheet['B8'].value
    self.metadata["name"] = self.metadata["information_definition"]+" to AIRM "+self.metadata["airm_version"]
    self.metadata["url_name"] = self.metadata["name"].lower().replace(" ", "-")
    print("Mapping metadata:")
    print("name: "+self.metadata["name"])
    print("url_name: "+self.metadata["url_name"])
    print("notes: "+self.metadata["notes"])

  def get_information_concepts(self):
    """Return a dictionary with the list of information concepts present in the mapping."""
    dataframe = self.dataframe.copy()
    #dataframe = dataframe.drop_duplicates(subset='Information Concept', keep="last")
    #TO DO Update list of tags dataframe = dataframe.drop(["Data Concept", "Definition", "Type", "Semantic Correspondence", "Additional Traces", "Rationale", "Notes"], axis=1)
    filter = dataframe["Data Concept"]=="missing data"
    dataframe.sort_values("Information Concept", inplace = True)
    dataframe.where(filter, inplace = True) 
    results = dataframe.dropna(how='all')      
    
    if dataframe.empty:
      return None
    else:
      return results.to_dict('records')

  def get_data_concepts(self, info_concept):
    """Return a dictionary containing the data concept for a given information concept from the mapping.

    Keyword arguments:
      info_concept -- dictionary entry with the information concept to be used as a filter to retrieve the associated data concepts.
    """
      dataframe = self.dataframe.copy()
      #dataframe = dataframe.drop_duplicates(subset='Information Concept', keep="last")
      #TO DO Update list of tags dataframe = dataframe.drop(["Data Concept", "Definition", "Type", "Semantic Correspondence", "Additional Traces", "Rationale", "Notes"], axis=1)
      filter = dataframe["Information Concept"] == info_concept
      dataframe.sort_values("Data Concept", inplace = True)
      dataframe.where(filter, inplace = True) 
      results = dataframe.dropna(how='all')      
      
      if dataframe.empty:
        return None
      else:
        return results.to_dict('records')