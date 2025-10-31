function deepClone(value) {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    const arrCopy = [];
    for (let i = 0; i < value.length; i++) {
      arrCopy[i] = deepClone(value[i]);
    }
    return arrCopy;
  }

  const objCopy = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      objCopy[key] = deepClone(value[key]);
    }
  }
  return objCopy;
}

// Example usage
const original = {
  name: "Kireeti",
  details: {
    age: 22,
    skills: ["React", "Node", { lang: "JavaScript" }]
  }
};

const cloned = deepClone(original);
cloned.details.skills[2].lang = "Python";

console.log(original.details.skills[2].lang); // "JavaScript"
console.log(cloned.details.skills[2].lang);   // "Python"
