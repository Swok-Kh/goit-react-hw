export const operationWrapper = (
  actionOnRequest,
  actionOnSuccess,
  actionOnError,
  requestFunc,
  valueAsPayload = false,
) => value => async dispatch => {
  dispatch(actionOnRequest());
  try {
    const response = await requestFunc(value);
    dispatch(actionOnSuccess(valueAsPayload ? value : response));
  } catch (error) {
    dispatch(actionOnError(error.message));
  }
};

export const payloadToState = (_, { payload }) => payload;
