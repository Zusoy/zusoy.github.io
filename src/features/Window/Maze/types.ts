export type VoidCell = 0
export type WallCell = 1
export type PlayerCell = 2
export type StartCell = 3
export type EndCell = 4

export type MazeCell = VoidCell | WallCell | PlayerCell | StartCell | EndCell
export type MazeGrid = MazeCell[][]

const mediumMaze: MazeGrid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 4, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 3, 1],
  [1, 0, 0, 0, 0, 2, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

const difficultMaze: MazeGrid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 4, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 3, 1],
  [1, 0, 0, 0, 0, 0, 0, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
]

export const mazes: MazeGrid[] = [mediumMaze, difficultMaze]
