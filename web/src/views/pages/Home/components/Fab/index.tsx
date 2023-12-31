import { PlusIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { cn } from '../../../../../app/utils/cn';
import { CategoryIcon } from '../../../../../assets/icons/categories/CategoryIcon';
import { BankAccountIcon } from '../../../../../assets/icons/BankAccountIcon';
import { useHome } from '../../hooks/useHome';

export function Fab() {
  const width = useWindowWidth();
  const {
    handleOpenNewBankAccountModal,
    handleOpenNewTransactionModal
  } = useHome();

  return (
    <div className={cn(
      'absolute bottom-4 translate-x-[1350px]',
      width < 1440 && 'translate-x-0 right-8',
    )}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="w-12 h-12 flex items-center justify-center bg-teal-800 rounded-full">
            <PlusIcon className="text-white w-6 h-6" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content side="top" align="end">
          <DropdownMenu.Item onSelect={() => handleOpenNewTransactionModal('OUTCOME')}>
            <CategoryIcon type="OUTCOME" />
            <span>Nova Despesa</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => handleOpenNewTransactionModal('INCOME')}>
            <CategoryIcon type="INCOME" />
            <span>Nova Receita</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={handleOpenNewBankAccountModal}>
            <BankAccountIcon />
            <span>Nova Conta</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
