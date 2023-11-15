import type { SyncEngine } from '@affine/workspace/providers';

import { useCurrentWorkspace } from './use-current-workspace';

export function useCurrentSyncEngine(): SyncEngine | undefined {
  const [workspace] = useCurrentWorkspace();
  // FIXME: This is a hack to get the sync engine, we need refactor this in the future.
  const syncEngine = (
    workspace.blockSuiteWorkspace.providers[0] as { engine?: SyncEngine }
  )?.engine;

  return syncEngine;
}
