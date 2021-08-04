<?php

namespace App\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(UrlGenerator $url)
    {
        // ステージング環境・本番環境ではhttps通信を強制する
        if (in_array(config('app.env'), ['production', 'staging'], true)) {
            $url->forceScheme('https');
        }
    }
}
