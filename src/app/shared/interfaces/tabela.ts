
export interface Tabela{
  _id: string,
  table_name: string,
  data_type: string,
  owned: boolean,
  has_access: boolean,
  status: string,
  details: Detalhe[]
}

export interface Detalhe{
  index: number,
  client_name: string,
  gender: string,
  age: number,
  email: string,
  phone: string,
  registered: string,
  balance: string,
  credit_status: string
}