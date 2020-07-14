// CREATE errors
export const createMethodError = 'You must use the POST method for this endpoint!';
export const createQueryError =
  "You need to pass in a body with 'category', 'name', and 'description'!";

// READ errors
export const readMethodError = 'You must use the GET method for this endpoint!';

// UPDATE errors
export const updateMethodError = 'You must use the PATCH method for this endpoint!';
export const updateQueryError =
  "You need to pass in 'id' as a query parameter! Optional values are: 'category', 'name', and 'description'.";

// DELETE errors
export const deleteMethodError = 'You must use the DELETE method for this endpoint!';
export const deleteQueryError = "You need to pass in 'id' as a query parameter!";
