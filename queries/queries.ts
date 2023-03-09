export const insertDeposit = (tag: string, tx: string, amount: number) => {
  return `
    INSERT INTO deposits
      (tag, tx, amount)
    VALUES
      (
        '${tag}',
        '${tx}',
        '${amount}'
      )
    RETURNING *;
  `
}
