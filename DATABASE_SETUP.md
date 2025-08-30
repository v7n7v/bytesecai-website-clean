# Database Setup Guide for ByteSecAI

## 🗄️ **Supabase Database Setup**

The website requires several database tables to be created in your Supabase instance. Currently, the APIs are gracefully handling missing tables, but for full functionality, you should create these tables.

### **📋 Required Tables**

1. **`newsletter_subscribers`** - For newsletter signups
2. **`contacts`** - For contact form submissions  
3. **`chat_sessions`** - For chat message storage

### **🚀 Quick Setup**

1. **Go to your Supabase Dashboard**
   - Navigate to your project
   - Go to **SQL Editor**

2. **Run the Schema Script**
   - Copy the contents of `supabase-schema-simple.sql` (recommended for compatibility)
   - Or use `supabase-schema.sql` for advanced features
   - Paste it into the SQL Editor
   - Click **Run** to execute

3. **Verify Tables Created**
   - Go to **Table Editor**
   - You should see the three tables listed

### **🔧 Manual Table Creation**

If you prefer to create tables manually:

#### **Newsletter Subscribers Table**
```sql
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  source VARCHAR(20) DEFAULT 'website' CHECK (source IN ('website', 'popup', 'api', 'manual')),
  interests TEXT[] DEFAULT ARRAY['cybersecurity'],
  subscription_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_date TIMESTAMP WITH TIME ZONE,
  emails_sent INTEGER DEFAULT 0,
  emails_opened INTEGER DEFAULT 0,
  links_clicked INTEGER DEFAULT 0,
  ip_address INET,
  user_agent TEXT,
  country VARCHAR(100),
  city VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **Contacts Table**
```sql
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(200),
  message TEXT NOT NULL CHECK (char_length(message) <= 2000),
  subject VARCHAR(200),
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  source VARCHAR(20) DEFAULT 'website' CHECK (source IN ('website', 'chatbot', 'api')),
  ip_address INET,
  user_agent TEXT,
  tags TEXT[],
  notes JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### **Chat Sessions Table (Simplified)**
```sql
CREATE TABLE IF NOT EXISTS chat_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id VARCHAR(100) UNIQUE NOT NULL,
  user_id VARCHAR(100) DEFAULT 'anonymous',
  message TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(20) DEFAULT 'website',
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### **✅ Current Status**

- **Newsletter API**: ✅ Working (gracefully handles missing table)
- **Chat API**: ✅ Working (gracefully handles missing table)
- **Contact API**: ✅ Working (gracefully handles missing table)

### **🔍 Troubleshooting**

- **"Table not found" errors**: Run the schema script in Supabase SQL Editor
- **Permission errors**: Check Row Level Security (RLS) policies in the schema
- **Connection issues**: Verify your Supabase URL and API key in `.env.local`

### **🚨 Common Issues & Solutions**

#### **Issue 1: Tables Still Not Found After Running Schema**
```sql
-- Check if tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('newsletter_subscribers', 'contacts', 'chat_sessions');

-- If no tables found, check for errors in SQL execution
```

#### **Issue 2: RLS Policy Conflicts**
```sql
-- Check existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('newsletter_subscribers', 'contacts', 'chat_sessions');

-- Drop conflicting policies if needed
DROP POLICY IF EXISTS "conflicting_policy_name" ON table_name;
```

#### **Issue 3: Schema Cache Issues**
- **Solution**: Restart your Supabase project or wait 5-10 minutes
- **Alternative**: Drop and recreate tables manually

#### **Issue 4: Data Type Compatibility**
- **Problem**: `INET` type not supported in some Supabase instances
- **Solution**: Use `VARCHAR(45)` instead (as in simplified schema)

### **📝 Environment Variables**

Make sure your `.env.local` file contains:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

**Note**: The website will continue to work without these tables, but data won't be stored in the database. All functionality will work through webhooks instead.
