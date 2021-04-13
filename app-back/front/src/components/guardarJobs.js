
import * as Joi from "joi";
import useOfferForm from "./customHooks";

function SaveJob() {
  
  const schema = Joi.object({
    name: Joi.string().required(),
    company: Joi.string().required(),
    salary: Joi.number().required(),
    city: Joi.string().required(),
  });

  
  const { handleSubmit, handleChange, errors } = useOfferForm(schema);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="company"> Company </label>
        <input
          type="text"
          id="company"
          name="company"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="salary"> Salary </label>
        <input
          type="number"
          id="salary"
          name="salary"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city"> City </label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
        />
      </div>
      <div>
      <p> {errors.toString()} </p>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default SaveJob;