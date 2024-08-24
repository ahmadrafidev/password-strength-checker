'use client'

import { useState, useEffect } from 'react'

import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { CheckCircle, XCircle } from 'lucide-react'

export default function Component() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)
  const [message, setMessage] = useState('')

  const checkStrength = (password: string) => {
    let score = 0
    const checks = [
      { regex: /.{8,}/, message: 'At least 8 characters' },
      { regex: /[A-Z]/, message: 'Uppercase letter' },
      { regex: /[a-z]/, message: 'Lowercase letter' },
      { regex: /[0-9]/, message: 'Number' },
      { regex: /[^A-Za-z0-9]/, message: 'Special character' }
    ]

    checks.forEach(check => {
      if (check.regex.test(password)) {
        score += 20
      }
    })

    setStrength(score)

    if (score === 100) {
      setMessage('Very Strong')
    } else if (score >= 80) {
      setMessage('Strong')
    } else if (score >= 60) {
      setMessage('Moderate')
    } else if (score >= 40) {
      setMessage('Weak')
    } else {
      setMessage('Very Weak')
    }
  }

  useEffect(() => {
    checkStrength(password)
  }, [password])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Password Strength Checker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Progress value={strength} className="w-full" />
          <p className="text-sm font-medium text-center">{message}</p>
          <div className="space-y-2">
            {[
              { check: /.{8,}/, text: 'At least 8 characters' },
              { check: /[A-Z]/, text: 'Uppercase letter' },
              { check: /[a-z]/, text: 'Lowercase letter' },
              { check: /[0-9]/, text: 'Number' },
              { check: /[^A-Za-z0-9]/, text: 'Special character' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.check.test(password) ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
