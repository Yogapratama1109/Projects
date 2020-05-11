Public Class Form5
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If TextBox1.Text = "" Then
            MsgBox("Maaf makanan tidak boleh kosong")
        Else
            If ListBox1.Items.Contains(TextBox1.Text) Then
                MsgBox("Maaf makanan yang anda masukan sudah ada")
            Else
                ListBox1.Items.Add(TextBox1.Text)
                TextBox1.Text = ""
            End If
        End If
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        If ListBox1.SelectedItem = "" Then
            MsgBox("Maaf pilih dulu makanan yang akan di hapus")
        Else
            ListBox1.Items.Remove(ListBox1.SelectedItem)
        End If
    End Sub
End Class
