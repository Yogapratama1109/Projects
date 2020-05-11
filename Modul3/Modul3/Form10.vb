Public Class Form10
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        TextBox6.Text = (Val(TextBox3.Text) + Val(TextBox4.Text)) - (Val(TextBox5.Text) * Val(TextBox3.Text))
    End Sub

    Private Sub ComboBox1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles ComboBox1.SelectedIndexChanged
        If ComboBox1.Text = "Directure" Then
            TextBox3.Text = 10000000
            TextBox4.Text = 2500000
            TextBox5.Text = 0.1
        ElseIf ComboBox1.Text = "Manager" Then
            TextBox3.Text = 70000000
            TextBox4.Text = 20000000
            TextBox5.Text = 0.1
        ElseIf ComboBox1.Text = "Secretaris" Then
            TextBox3.Text = 40000000
            TextBox4.Text = 10000000
            TextBox5.Text = 0.1
        End If
    End Sub
End Class
