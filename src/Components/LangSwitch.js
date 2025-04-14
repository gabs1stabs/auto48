import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const languageOptions = [
  {
    value: "en",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/flags/en.png"
          alt="English"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
      </div>
    ),
    flag: "/flags/en.png",
  },
  {
    value: "fr",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/flags/fr.png"
          alt="Français"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />  
      </div>
    ),
    flag: "/flags/fr.png",
  },
  {
    value: "mr",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/flags/mr.png"
          alt="Morocco"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
      </div>
    ),
    flag: "/flags/mr.png",
  },
];

export default function LangSwitch() {
  const [selectedLang, setSelectedLang] = useState(null);

  useEffect(() => {
    const langFromStorage = localStorage.getItem("lang");
    if (langFromStorage) {
      setSelectedLang(langFromStorage);
    } else {
      setSelectedLang("en");
    }
  }, []);

  const handleChangeLanguage = (selectedOption) => {
    const langCode = selectedOption.value;
    localStorage.setItem("lang", langCode);
    setSelectedLang(langCode);

    // Make the API call to change the language
    fetch(`http://your-laravel-api.com/api/language/${langCode}`)
      .then((res) => res.json())
      .then((data) => console.log("Language changed:", data))
      .catch((error) => console.error("Error changing language:", error));
  };
  return (
    <div style={{
    width: "140px",
}}>
      <Select
        options={languageOptions}
        value={languageOptions.find((option) => option.value === selectedLang)}
        onChange={handleChangeLanguage}
        components={makeAnimated()}
        styles={{
          control: (provided) => ({
            ...provided,
            width: "50%", 
            borderColor: "#ccc",
            border:"none",
            borderRadius: "0px",
          }),
          option: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            padding: "3px", 
            width: "20px", 
            height: "24px", 
            marginRight:"3px",
            backgroundColor: "#f4f4f4", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "transparent",
            backgroundImage: "url('/flags/ArrDown.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat", 
          }),
          menu: (provided) => ({
            ...provided,
            width: "50%", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)", 
            clipPath: "polygon(20% 0%, 100% 0, 100% 20%, 100% 100%, 80% 100%, 15% 100%, 0% 88%, 0 0)",
          }),
          
          indicatorsContainer: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }),
          container: (provided) => ({
            ...provided,
          }),
        }}
      />
    </div>
  );
}
