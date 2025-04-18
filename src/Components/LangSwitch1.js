import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const languageOptions1 = [
  {
    value: "en",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/flags/en.png"
          alt="English"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
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
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
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
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
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

    fetch(`http://your-laravel-api.com/api/language/${langCode}`)
      .then((res) => res.json())
      .then((data) => console.log("Language changed:", data))
      .catch((error) => console.error("Error changing language:", error));
  };

  const filterOption = (option, inputValue) => {
    return option.value !== selectedLang;
  };

  return (
    <div style={{ width: "150px" }}>
      <Select
        options={languageOptions1}
        value={languageOptions1.find((option) => option.value === selectedLang)}
        onChange={handleChangeLanguage}
        components={makeAnimated()}
        filterOption={filterOption}
        styles={{
          control: (provided) => ({
            ...provided,
            width: "50%",
            borderColor: "#ccc",
            border: "none",
            borderRadius: "0px",
          }),
          option: (provided) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            padding: "2px",
            width: "22px",
            height: "24px",
            marginRight: "3px",
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
            width: "35%",
            marginTop: "0px",
            marginRight:"20px",
            borderRadius: "0px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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