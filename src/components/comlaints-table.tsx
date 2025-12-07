import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function ComplaintsTable({ data }: { data: any }) {
  const complaints = data?.recent_complaints || []

  return (
    <Card className="rounded-[24px] border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Recent Complaints</CardTitle>
        <CardDescription>Последние отзывы клиентов</CardDescription>
      </CardHeader>
      <CardContent>
        {complaints.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No complaints data available</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complaints.map((complaint: any) => (
                <TableRow key={complaint.id}>
                  <TableCell className="font-medium">#{complaint.id}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-[#7A3EFF]/10 to-[#C56FFF]/10 border-[#7A3EFF]/30"
                    >
                      {complaint.category}
                    </Badge>
                  </TableCell>
                  <TableCell>{complaint.issue}</TableCell>
                  <TableCell className="text-muted-foreground">{complaint.date}</TableCell>
                  <TableCell>
                    <Badge variant={complaint.severity === "high" ? "destructive" : "secondary"}>
                      {complaint.severity}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
