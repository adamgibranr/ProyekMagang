<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{

    public function resourceDevice(Request $request){
        $data = $request->all();
        $data = json_decode($data[0], true);
        $cpu_cores = $data['cpu_info']['physical_cores'];
        $cpu_thread = $data['cpu_info']['total_cores'];
        $cpu_basefreq = $data['cpu_info']['processor_speed'];
        $cpu_runfreq = '1';
        $cpu_runtime = $data['cpu_info']['total_cpu_usage'];
        $mem_total = $data['memory_info']['total_memory'];
        $mem_available = $data['memory_info']['available_memory'];
        $mem_used = $data['memory_info']['used_memory'];
        $mem_runtime = $data['memory_info']['memory_percentage'];
        $storage_total = '1';
        $storage_available = '1';
        $storage_used = '1';
        $storage_runtime = '1';
        $pkt_sent = $data['net_io_counters']['packets_sent'];
        $pkt_rec = $data['net_io_counters']['packets_recv'];
        $byte_sent = $data['net_io_counters']['bytes_sent'];
        $byte_rec = $data['net_io_counters']['bytes_recv'];
        $ip_private = $data['net_id']['private_ip_address'];
        $ip_public = $data['net_id']['public_ip_address'];
        $mac_address = $data['net_id']['mac_address'];

        $resource = new Resource;
        $resource->cpu_cores = $cpu_cores;
        $resource->cpu_thread = $cpu_thread;
        $resource->cpu_basefreq = $cpu_basefreq;
        $resource->cpu_runfreq = $cpu_runfreq;
        $resource->cpu_runtime = $cpu_runtime;
        $resource->mem_total = $mem_total;
        $resource->mem_available = $mem_available;
        $resource->mem_used = $mem_used;
        $resource->mem_percentage = $mem_runtime;
        $resource->storage_total = $storage_total;
        $resource->storage_available = $storage_available;
        $resource->storage_used = $storage_used;
        $resource->storage_percentage = $storage_runtime;
        $resource->pkt_sent = $pkt_sent;
        $resource->pkt_rec = $pkt_rec;
        $resource->byte_sent = $byte_sent;
        $resource->byte_rec = $byte_rec;
        $resource->ip_public = $ip_public;
        $resource->ip_private = $ip_private;
        $resource->mac_address = $mac_address;
        $resource->save();
        // return redirect()->back();



        // try {
        //     // return response()->json(['message' => 'Data saved successfully']);
        //     echo json_encode(['message' => 'Data saved successfully']);
        // } catch (Exception $e){
        //     return response()->json(['error' => $e->getMessage()], 500);
        //     $errorResponse = ['error' => $e->getMessage()];
        //     // http_response_code(500);
        //     echo json_encode($errorResponse);
        // }
    
        $prefix = 'webhookLog_';
        $file = $prefix . '.log';
        $date = new \DateTime();
        error_log($date->format('Y-m-d H:i:s') . ' ' . json_encode($request->all()) . "\n\n", 3, $prefix . $file);

        echo json_encode('oke');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Resource::latest()->first();
        return  view('index')->with("resource",$resource);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Resource $resource)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resource $resource)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resource $resource)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resource $resource)
    {
        //
    }
}
