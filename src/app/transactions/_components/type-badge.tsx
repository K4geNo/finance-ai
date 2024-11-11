import { Badge } from "@/components/ui/badge"
import { Transaction, TransactionType } from "@prisma/client"
import { CircleIcon } from "lucide-react"

type TransactionTypeBadgeProps = {
	transaction: Transaction
}

export function TransactionTypeBadge({
	transaction,
}: TransactionTypeBadgeProps) {
	if (transaction.type === TransactionType.INCOME) {
		return (
			<Badge className="bg-muted font-bold text-primary hover:bg-muted">
				<CircleIcon className="mr-2 fill-primary" size={10} />
				Entrada
			</Badge>
		)
	}

	if (transaction.type === TransactionType.EXPENSE) {
		return (
			<Badge className="bg-danger/10 font-bold text-danger hover:bg-danger/10">
				<CircleIcon className="mr-2 fill-danger" size={10} />
				Saída
			</Badge>
		)
	}

	return (
		<Badge className="bg-white/10 font-bold text-white hover:bg-white/10">
			<CircleIcon className="mr-2 fill-white" size={10} />
			Investimento
		</Badge>
	)
}
