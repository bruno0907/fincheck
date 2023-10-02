import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../assets/icons/BankAccountTypeIcon";

interface AccountCardProps {
  color: string;
  name: string;
  balance:number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT'
}

export function AccountCard({ color, name, balance, type }: AccountCardProps) {
  return (
    <div
      className="h-[200px] bg-white rounded-2xl p-4 flex flex-col justify-between border-b-4 border-b-teal-950"
      style={{ borderBottomColor: color}}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px]">{name}</span>
      </div>

      <div>
        <span className="text-gray-800 font-medium tracking-[-0.5px] block">{formatCurrency(balance)}</span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  )
}