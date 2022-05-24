import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

export const getAllCountries =  async() => {
  try {
    const countries = await axios.get(baseUrl);
    return countries;
    
  } catch (error) {
    console.log(error);
  }
};

// export const updateCourse = async (id, course) => {
//   try {
//     console.log(baseUrl + id);
//     await axios.patch(`${baseUrl}/${id}`, course);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createCourse = async (course) => {
//   try {
//     await axios.post(baseUrl, course);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteCourse = async (id) => {
//   try {
//     console.log(`${baseUrl}/${id}`);
//     await axios.delete(`${baseUrl}/${id}`);
//   } catch (error) {
//     console.log(error);
//   }
// };
