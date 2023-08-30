export async function setupMockServer() {
  const { setupWorker, rest } = await import('msw');
  const server = setupWorker(
    rest.get('/ping', (_, res, ctx) => {
      return res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json({
          compatibility: '0.0.1',
          message: 'AFFiNE Mock Server',
        })
      );
    }),
    rest.get('/api/auth/session', (_, res, ctx) => {
      return res(ctx.delay(200), ctx.status(200), ctx.json({}));
    })
  );

  await server.start({
    quiet: true,
    waitUntilReady: true,
  });
}