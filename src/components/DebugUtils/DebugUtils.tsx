import React from 'react';
import { Box } from '@mui/material';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { useResizeObserver } from 'src/hooks/useResizeObserver';
import { useScene } from 'src/hooks/useScene';
import { LineItem } from './LineItem';

export const DebugUtils = () => {
  const uiState = useUiStateStore(
    ({ scroll, mouse, zoom, mode, rendererEl }) => {
      return { scroll, mouse, zoom, mode, rendererEl };
    }
  );
  const scene = useScene();
  const { size: rendererSize } = useResizeObserver(uiState.rendererEl);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'common.white',
        px: 2,
        py: 1
      }}
    >
      <LineItem
        title="指针坐标"
        value={`${uiState.mouse.position.tile.x}, ${uiState.mouse.position.tile.y}`}
      />
      <LineItem
        title="指针按键"
        value={
          uiState.mouse.mousedown
            ? `${uiState.mouse.mousedown.tile.x}, ${uiState.mouse.mousedown.tile.y}`
            : 'null'
        }
      />
      <LineItem
        title="指针位移量"
        value={
          uiState.mouse.delta
            ? `${uiState.mouse.delta.tile.x}, ${uiState.mouse.delta.tile.y}`
            : 'null'
        }
      />
      <LineItem
        title="滚轮"
        value={`${uiState.scroll.position.x}, ${uiState.scroll.position.y}`}
      />
      <LineItem title="变焦" value={uiState.zoom} />
      <LineItem
        title="视口大小"
        value={`${rendererSize.width}, ${rendererSize.height}`}
      />
      <LineItem
        title="图形对象"
        value={`共 ${scene.items.length} 个元素`}
      />
      <LineItem title="模式" value={uiState.mode.type} />
      <LineItem title="模式参数" value={JSON.stringify(uiState.mode)} />
    </Box>
  );
};
