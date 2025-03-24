export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      messages: {
        Row: {
          content: string
          created_at: string
          id: string
          property_id: string | null
          read: boolean | null
          recipient_id: string | null
          sender_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          property_id?: string | null
          read?: boolean | null
          recipient_id?: string | null
          sender_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          property_id?: string | null
          read?: boolean | null
          recipient_id?: string | null
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "timeshare_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      resorts: {
        Row: {
          amenities: string[] | null
          city: string
          country: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          location: string
          name: string
          rating: number | null
          state: string | null
        }
        Insert: {
          amenities?: string[] | null
          city: string
          country: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          location: string
          name: string
          rating?: number | null
          state?: string | null
        }
        Update: {
          amenities?: string[] | null
          city?: string
          country?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string
          name?: string
          rating?: number | null
          state?: string | null
        }
        Relationships: []
      }
      timeshare_properties: {
        Row: {
          amenities: string[] | null
          bathrooms: number
          bedrooms: number
          created_at: string
          description: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          images: string[] | null
          internal_exchange: boolean | null
          location: string
          maintenance_fee: number | null
          ownership_type: string | null
          price: number
          rental_price: number | null
          resort_id: string | null
          season: string | null
          seller_id: string | null
          sleeps: number
          title: string
          usage: string
          week: string | null
        }
        Insert: {
          amenities?: string[] | null
          bathrooms: number
          bedrooms: number
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          internal_exchange?: boolean | null
          location: string
          maintenance_fee?: number | null
          ownership_type?: string | null
          price: number
          rental_price?: number | null
          resort_id?: string | null
          season?: string | null
          seller_id?: string | null
          sleeps: number
          title: string
          usage: string
          week?: string | null
        }
        Update: {
          amenities?: string[] | null
          bathrooms?: number
          bedrooms?: number
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          internal_exchange?: boolean | null
          location?: string
          maintenance_fee?: number | null
          ownership_type?: string | null
          price?: number
          rental_price?: number | null
          resort_id?: string | null
          season?: string | null
          seller_id?: string | null
          sleeps?: number
          title?: string
          usage?: string
          week?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "timeshare_properties_resort_id_fkey"
            columns: ["resort_id"]
            isOneToOne: false
            referencedRelation: "resorts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      user_has_role: {
        Args: {
          role: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
