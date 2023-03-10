export const insertDeposit = (chainId: number, tag: string, tx: string, amount: number, account: string) => {
  return `
    INSERT INTO deposits
      (chainId, tag, tx, amount, account)
    VALUES
      (
        '${chainId}',
        '${tag}',
        '${tx}',
        '${amount}',
        '${account}'
      )
    RETURNING *;
  `
}

export const getLatestDeposits = (chainId: number, account: string) => {
  return `
    SELECT *
    FROM deposits
    WHERE chainId=${chainId} AND account='${account}'
    ORDER BY id desc
    LIMIT 10
  `
}
