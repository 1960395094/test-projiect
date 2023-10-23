interface IFiles {
  id: number,
  fileName: string,
  uploadTime: string,
  fileSize: string,
  status: number
}

export function queryDataSet(): Promise<IFiles[]> {
  return new Promise((reslove, reject) => {
    setTimeout(function() {
      const data = new Array(6).fill(1).map((_, i: number): IFiles => {
        return {
          id: i,
          fileName: `文件${i + 1}.txt`,
          uploadTime: new Date().toLocaleString(),
          fileSize: '100kb',
          status: i % 2 === 0 ? 0 : 1
        }
      })
      reslove(data)
    }, 500)
  })
}