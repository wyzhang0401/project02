export default {
  name: "GRCh38_chr19",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38_chr19-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/chr19.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/chr19.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/chr19.fa.gz.gzi"
      }
    }
  }
};
