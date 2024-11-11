"use client"

import { Badge } from "@/components/ui/badge"
import { Transaction, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { CircleIcon } from "lucide-react"
import { TransactionTypeBadge } from "../type-badge"

export const transactionColumns: ColumnDef<Transaction>[] = [
	{
		accessorKey: "name",
		header: "Nome",
	},
	{
		accessorKey: "type",
		header: "Tipo",
		cell: ({ row: { original: transaction } }) => (
			<TransactionTypeBadge transaction={transaction} />
		),
	},
	{
		accessorKey: "category",
		header: "Categoria",
	},
	{
		accessorKey: "paymentMethod",
		header: "Método de pagamento",
	},
	{
		accessorKey: "date",
		header: "Data",
	},
	{
		accessorKey: "value",
		header: "Valor",
	},
	{
		accessorKey: "actions",
	},
]
