export default async (params) => {
  const { data, error, refresh } = await useFetch(`/api/trips`, {
    params: {
      ...params,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch trips.",
    });
  }

  return { data, refresh };
};
