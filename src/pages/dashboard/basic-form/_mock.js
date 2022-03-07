// eslint-disable-next-line import/no-extraneous-dependencies
export default {
  'POST  /api/face': (_, res) => {
    res.send({
      data: {
        message: 'Ok',
      },
    });
  },
};
