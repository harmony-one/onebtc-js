interface IOutput {
  address: string;
  value: number;
}

interface IRezOutput {
  value: number;
  hash: string;
  hex: string;
  index: number;
}

interface IInput {
  prevout: {
    hash: string;
    index: number;
  };
}

interface ITransaction {
  hash: string;
  hex: string;
  outputs: IOutput[];
  inputs: IInput[];
}

const isUsedInInputs = (
  txs: ITransaction[],
  output: { hash: string; index: number },
) => {
  return txs.some((tx) =>
    tx.inputs.some((input) => {
      const { hash, index } = input.prevout;
      return hash === output.hash && index === output.index;
    }),
  );
};

export const getActualOutputs = (
  txs: ITransaction[],
  mainAddress: string,
): IRezOutput[] => {
  const outputsToUse: any[] = [];

  txs.forEach((tx) => {
    tx.outputs.forEach((out, index) => {
      if (
        out.address === mainAddress &&
        !isUsedInInputs(txs, { hash: tx.hash, index })
      ) {
        outputsToUse.push({
          hash: tx.hash,
          index,
          hex: tx.hex,
          value: out.value,
        });
      }
    });
  });

  return outputsToUse;
};
