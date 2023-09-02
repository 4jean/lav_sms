<?php
namespace Database\Seeders;

use App\Models\District;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DistrictsTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('districts')->delete();
        $districts = [
        "1,Taplejung",
        "1,Panchthar",
        "1,Ilam",
        "1,Jhapa",
        "1,Sankhuwasabha",
        "1,Terathum",
        "1,Bhojpur",
        "1,Dhankuta",
        "1,Morang",
        "1,Sunsari",
        "1,Solukhumbu",
        "1,Khotang",
        "1,Okhaldhunga",
        "1,Udayapur",
        "2,Saptari",
        "2,Siraha",
        "3,Dolakha",
        "3,Ramechhap",
        "3,Sindhuli",
        "2,Dhanusha",
        "2,Mahottari",
        "2,Sarlahi",
        "3,Rasuwa",
        "3,Dhading",
        "3,Nuwakot",
        "3,Kathmandu",
        "3,Bhaktapur",
        "3,Lalitpur",
        "3,Kavrepalanchok",
        "3,Sindhupalchok",
        "3,Makwanpur",
        "2,Rautahat",
        "2,Bara",
        "2,Parsa",
        "3,Chitwan",
        "4,Gorkha",
        "4,Manang",
        "4,Lamjung",
        "4,Kaski",
        "4,Tanahun",
        "4,Syanja",
        "5,Gulmi",
        "5,Palpa",
        "5,Arghakhanchi",
        "4,Nawalparasi (East of Bardghat Susta)",
        "5,Rupandehi",
        "5,Kapilvastu",
        "4,Mustang",
        "4,Myagdi",
        "4,Baglung",
        "4, Mustang",
        "5,Rukum East",
        "5,Rolpa",
        "5,Pyuthan",
        "6,Salyan",
        "5,Dang",
        "6,Dolpa",
        "6,Mugu",
        "6,Jumla",
        "6,Kalikot",
        "6,Humla",
        "6,Jajarkot",
        "6,Dailekh",
        "6,Surkhet",
        "5,Banke",
        "5,Bardia",
        "7,Bajura",
        "7,Achham",
        "7,Bajhang",
        "7,Doti",
        "7,Kailali",
        "7,Darchula",
        "7,Baitadi",
        "7,Dadeldhura",
        "7,Kanchanpur",
        "4,Nawalparasi (Bardghat Susta West)",
        "6,Rukum West",        
        ];

        foreach($districts as $key=>$values){
            $value = explode(",", $values);
            District::create(['province_id' => $value[0], 'name' => $value[1]]);       
        }
    }

}
